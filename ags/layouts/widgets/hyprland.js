import * as hyprland from '../../modules/hyprland.js';
const { Box, EventBox, Button } = ags.Widget;

export const Workspaces = props => Box({
    ...props,
    className: 'workspaces panel-button',
    children: [Box({
        children: [EventBox({
            className: 'eventbox',
            child: hyprland.Workspaces({
                indicator: () => Box({
                    className: 'indicator',
                    valign: 'center',
                    children: [Box({ className: 'fill' })],
                }),
            }),
        })],
    })],
});

export const Client = props => Button({
    ...props,
    className: 'client panel-button',
    child: Box({
        children: [
            hyprland.ClientIcon({
                symbolic: true,
                substitutes: [
                    { from: 'FFPWA-01GCH6HCGTY0HBTKA0Z8DNPN36-symbolic', to: 'io.bassi.Amberol-symbolic' },
                    { from: 'FFPWA-01GCH6J70CVND1ZK09Z2ZAEV30-symbolic', to: 'io.bassi.Amberol-symbolic' },
                    { from: 'blueberry.py-symbolic', to: 'bluetooth-symbolic' },
                    { from: 'kitty-symbolic', to: 'folder-code-symbolic' },
                    { from: 'org.kde.dolphin-symbolic', to: 'folder-symbolic' },
                    { from: 'Code-symbolic', to: 'computer-fail-symbolic' },
                    { from: 'Beeper-symbolic', to: 'user-available-symbolic' },
                    { from: '-symbolic', to: 'preferences-desktop-display-symbolic' },
                ],
            }),
            hyprland.ClientLabel({
                show: 'class',
                substitutes: [
                    { from: 'FFPWA-01H66683SN0NBHHRDFDP7FE25G', to: 'Wobbl Chat' },
                    { from: 'FFPWA-01GCH6QABJN7FVE7J18H4B37BH', to: 'Twitter' },
                    { from: 'FFPWA-01GCH6HCGTY0HBTKA0Z8DNPN36', to: 'YouTube' },
                    { from: 'FFPWA-01GCH6J70CVND1ZK09Z2ZAEV30', to: 'YouTube Music' },
                    { from: 'com.obsproject.Studio', to: 'OBS' },
                    { from: 'hu.kramo.Cartridges', to: 'Cartridges' },
                    { from: 'org.gnome.TextEditor', to: 'Text Editor' },
                    { from: 'org.gnome.Software', to: 'Software' },
                    { from: 'org.gnome.Todo', to: 'Endeavour' },
                    { from: 'org.gnome.Nautilus', to: 'Files' },
                    { from: 'org.kde.dolphin', to: 'Dolphin' },
                    { from: 'io.missioncenter.MissionCenter', to: 'Task Manager?' },
                    { from: 'org.gnome.design.IconLibrary', to: 'Icon Library' },
                    { from: 'blueberry.py', to: 'Blueberry' },
                    { from: 'kitty', to: 'Kitty' },
                    { from: 'discord', to: 'Discord'},
                    { from: 'krita', to: 'Krita'},
                    { from: 'steam', to: 'Steam'},
                    { from: 'firefox', to: 'Firefox' },
                    { from: 'libreoffice-writer', to: 'Writer' },
                    { from: 'huiontablet', to: 'Tablet settings'},
                    { from: 'Code', to: 'Visual Studio Code' },
                    { from: '', to: 'Desktop' },
                ],
            }),
        ],
    }),
});
