export const deflisten = function (name, command, transformer = (a) => a) {
  const { Service } = ags;
  const GObject = imports.gi.GObject;

  const v = GObject.registerClass(
      {
          GTypeName: name,
          Properties: {
              state: GObject.ParamSpec.string(
                  "state",
                  "State",
                  "Read-Write string state.",
                  GObject.ParamFlags.READWRITE,
                  ""
              ),
          },
          Signals: {
              [`${name}-changed`]: {},
          },
      },
      class Subclass extends Service {
          get state() {
              return this._state || "";
          }

          set state(value) {
              this._state = value;
              this.emit("changed");
          }

          get proc() {
              return this._proc || null;
          }

          set proc(value) {
              this._proc = value;
          }

          start = () => {
              this.proc = ags.Utils.subprocess(command, (line) => {
                  this.state = transformer(line);
              });
          }

          stop = () => {
              this.proc.force_exit();
              this.proc = null;
          }

          constructor() {
              super();
              this.proc = ags.Utils.subprocess(command, (line) => {
                  this.state = transformer(line);
              });
          }
      }
  );

  class State {
      static {
          Service.export(this, name);
      }

      static instance = new v();

      static get state() {
          return State.instance.state;
      }

      static set state(value) {
          State.instance.state = value;
      }

      static start() {
          State.instance.start();
      }
      static stop () {
          State.instance.stop();
      }
  }

  return State;
}