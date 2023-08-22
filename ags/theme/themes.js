const editScheme = (scheme, edit) => {
    const obj = {};
    Object.keys(scheme).forEach(color => obj[color] = edit(scheme[color]));
    return obj;
};

const gnome = {
    red: '#f66151',
    green: '#57e389',
    yellow: '#f6d32d',
    blue: '#62a0ea',
    magenta: '#c061cb',
    teal: '#5bc8aF',
    orange: '#ffa348',
};

const charm = {
    red: '#FF5555',
    green: '#50FA7B',
    yellow: '#F1FA8C',
    blue: '#51a4e7',
    magenta: '#BD93F9',
    teal: '#8BE9FD',
    orange: '#E79E64',
};

const dark = {
    wallpaper: "/home/zazag/Pictures/Art/1 .Furry/Fat/Group/Mashup.png",
    color_scheme: 'dark',
    bg_color: 'rgba(30, 30, 46, 0.7)',
    fg_color: '#cdd6f4',
    hover_fg: '#deb4fe',
    ...charm,
};

const light = {
    color_scheme: 'light',
    bg_color: '#cdd6f4',
    fg_color: '#141414',
    hover_fg: '#0a0a0a',
    ...editScheme(gnome, c => `darken(${c}, 8%)`),
};

const misc = {
    wm_gaps: 7,
    radii: 12,
    spacing: 9,
    shadow: 'rgba(189, 147, 249, 0.8)',
    drop_shadow: true,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
};

const colors = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(3f3f3fFF)',
    hypr_inactive_border: 'rgba(3f3f3fDD)',
    accent: '$blue',
    accent_fg: '#141414',
    widget_bg: '$fg_color',
    widget_opacity: 97,
    active_gradient: 'to right, $accent, lighten($accent, 6%)',
    border_color: '$fg_color',
    border_opacity: 100,
    border_width: 1,
};

// themes
/* exported kitty_dark kitty_light leaves_dark leaves_light, ivory, cutefish */
var Dracula = {
    ...dark,
    ...misc,
    ...colors,
    name: 'Dracula',
    icon: '',
    accent: '$magenta',
};

export default [
    Dracula,
]