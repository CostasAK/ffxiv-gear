import "./style.scss";

const gearSlots = [
  {
    name: "Arm",
    icon: "https://img.finalfantasyxiv.com/lds/h/R/Wa_HAUGOz22VmCuetPNSeEM-xQ.png",
    cost: 500,
  },
  {
    name: "Head",
    icon: "https://img.finalfantasyxiv.com/lds/h/v/9mkh2Ay4mSoGCThyjfwMaR77ZE.png",
    cost: 495,
  },
  {
    name: "Body",
    icon: "https://img.finalfantasyxiv.com/lds/h/9/kDLAKkEWAc3-wW7OSRYYKeA8sU.png",
    cost: 825,
  },
  {
    name: "Hands",
    icon: "https://img.finalfantasyxiv.com/lds/h/F/EeF_cNjqfyFUZS4H3CUl_akrOs.png",
    cost: 495,
  },
  {
    name: "Legs",
    icon: "https://img.finalfantasyxiv.com/lds/h/v/-Iga4jhXVg7k7k9GdKa9giT85w.png",
    cost: 825,
  },
  {
    name: "Feet",
    icon: "https://img.finalfantasyxiv.com/lds/h/1/D3rcxWuUOH4gI61Dh_vm-fv8XM.png",
    cost: 495,
  },
  {
    name: "Earrings",
    icon: "https://img.finalfantasyxiv.com/lds/h/y/1dRk5kOxd5_2zCsiaIIwWNdBAU.png",
    cost: 375,
  },
  {
    name: "Necklace",
    icon: "https://img.finalfantasyxiv.com/lds/h/e/3cb5BeCN0YVrzEa3hLHz7k0AwE.png",
    cost: 375,
  },
  {
    name: "Bracelets",
    icon: "https://img.finalfantasyxiv.com/lds/h/I/XmdtL_irUpgqxPP6V0_Akh1bWw.png",
    cost: 375,
  },
  {
    name: "Left Ring",
    icon: "https://img.finalfantasyxiv.com/lds/h/f/K7MtjDG5XwqScYryJyl97Tf9V0.png",
    cost: 375,
  },
  {
    name: "Right Ring",
    icon: "https://img.finalfantasyxiv.com/lds/h/f/K7MtjDG5XwqScYryJyl97Tf9V0.png",
    cost: 375,
  },
];

export function TomestonePlanner(props) {
  return (
    <div className="TomestonePlanner">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th className="icon"></th>
              <th className="cost">Cost</th>
            </tr>
          </thead>
          <tbody>
            {gearSlots.map((s) => (
              <tr>
                <td className="item">
                  <img src={s.icon} alt="" width="48px" />
                  <span>{s.name}</span>
                </td>
                <td className="cost">{s.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
