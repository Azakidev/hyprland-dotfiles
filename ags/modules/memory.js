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
        className: 'memory-progress',
        tooltipText: 'Memory Usage',
        connections: [[5000, () => {
            execAsync(['bash', '-c', "printf %.2f $(free -m | grep Mem | awk '{print ($3/$2)*100}')"])
                .then(percent => {
                    label.label = `Memory: ${percent}%`;
                    progressbar.value = Number(percent) / 100;
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