import "./style.scss";

function importGearSlotIcons() {
  const req = require.context("../../assets/gear-slots", false, /\.png/i);
  let items = {};
  req
    .keys()
    .map(
      (item, index) =>
        (items[item.replace("./", "").replace(".png", "")] = req(item))
    );
  return items;
}
const icons = importGearSlotIcons();

const gearSlots = [
  {
    name: "Arm",
    cost: 500,
  },
  {
    name: "Head",
    cost: 495,
  },
  {
    name: "Body",
    cost: 825,
  },
  {
    name: "Hands",
    cost: 495,
  },
  {
    name: "Legs",
    cost: 825,
  },
  {
    name: "Feet",
    cost: 495,
  },
  {
    name: "Earrings",
    cost: 375,
  },
  {
    name: "Necklace",
    cost: 375,
  },
  {
    name: "Bracelets",
    cost: 375,
  },
  {
    name: "Left Ring",
    cost: 375,
  },
  {
    name: "Right Ring",
    cost: 375,
  },
].map((s) => {
  s.icon = icons[s.name];
  return s;
});

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
                  <img src={s.icon} alt="" />
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
