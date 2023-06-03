import Landing from "./landing";
import Search from "./search";
import Favorites from "./favorites";
import AppliedTo from "./appliedTo";

// This file merely translates my different views structuring overall for whatever is in the Views folder.

export { Landing, Search, Favorites, AppliedTo };

const Sectioning = () => {
  return (
    <div>
      <Landing />
      <Search />
      <Favorites />
      <AppliedTo />
    </div>
  );
}

export default Sectioning;







