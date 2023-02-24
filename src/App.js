import { Profile } from "./Profile";

function App() {
  const profileListData= [{
    name: "Emil",
    email: "emil@yahoo.de",
    address: "Yasamal,baku"
  },
  {
    name: "Qulu",
    email: "example@yahoo.de",
    address: "Ehmedli,baku"
  },
  {
    name: "Nail",
    email: "sample@yahoo.de",
    address: "Sebail,Baku"
  },
  {
    name: "Polad",
    email: "palod@yahoo.de",
    address: "Nerimanov,Baku"
  }



]
  return (
    <>
    <div className="card">
    {profileListData.map(profile => (
      <Profile
        name={profile.name}
        email={profile.email}
        address={profile.address}
      />
    ))}
  </div>
  </>
  );
}

export default App;
