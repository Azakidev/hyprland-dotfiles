const { App, Service } = ags;
const { exec, execAsync } = ags.Utils;
const { Icon, Label, Slider } = ags.Widget;

class BrightnessService extends Service {
    static { Service.register(this); }

    _screen = 0;

    get screen() { return this._screen; }

    set screen(percent) {
        if (percent < 0)
            percent = 0;

        if (percent > 1)
            percent = 1;

        execAsync(`ddcutil setvcp 10 ${Math.floor(percent * 100)}`)
            .then(() => {
                this._screen = percent;
                this.emit('changed');
            })
            .catch(print);
    }

    constructor() {
        super();
        this._screen = Number(exec(`${App.configDir}/getbright.sh`)) / 100;
    }
}

class Brightness {
    static { Service.export(this, 'Brightness'); }
    static instance = new BrightnessService();

    static get screen() { return Brightness.instance.screen; }
    static set screen(value) { Brightness.instance.screen = value; }
}

export const BrightnessSlider = props => Slider({
    ...props,
    drawValue: false,
    hexpand: true,
    connections: [
        [Brightness, slider => {
            slider.value = Brightness.screen;
        }],
    ],
    onChange: ({ value }) => Brightness.screen = value,
});

export const Indicator = props => Icon({
    ...props,
    icon: 'display-brightness-symbolic',
});

export const PercentLabel = props => Label({
    ...props,
    style: 'min-width: 55px',
    connections: [
        [Brightness, label => label.label = `${Math.floor(Brightness.screen * 100)}%`],
    ],
});
