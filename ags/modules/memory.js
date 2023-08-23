const { App } = ags;
const { execAsync } = ags.Utils;
const { ProgressBar, Box, Label, Overlay } = ags.Widget;

export const MemBar = () => {
    const progressbar = ProgressBar({ hexpand: true });
    const label = Label({
        halign: 'center',
        valign: 'center',
    });
    return Box({
        hexpand: true,
        vexpand: true,
        valign: 'center',
        className: 'memory-progress',
        tooltipText: 'Memory Usage',
        connections: [[2500, w => {
            execAsync(['bash', '-c', "printf %.2f $(free -m | grep Mem | awk '{print ($3/$2)*100}')"])
                .then(percent => {
                    label.label = `Memory: ${percent}%`;
                    progressbar.value = Number(percent) / 100;

                    w.toggleClassName('half', percent < 50);
                })
                .catch(logError);
        }]],
        children: [
            Overlay({
                child: progressbar,
                overlays: [label],
            }),
        ],
    });
};