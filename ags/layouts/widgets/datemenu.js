import { Clock, Uptime } from '../../modules/clock.js';
const { Box, Label } = ags.Widget;

export const PopupContent = props => Box({
    ...props,
    vertical: true,
    className: 'datemenu',
    children: [
        Clock({ format: '%I:%M %p' }),
        Box({
            className: 'uptime-box',
            halign: 'center',
            children: [
                Label('Uptime:  '),
                Uptime(),
            ],
        }),
        Box({
            className: 'calendar',
            children: [
                ags.Widget({
                    type: imports.gi.Gtk.Calendar,
                }),
            ],
        }),
    ],
});
