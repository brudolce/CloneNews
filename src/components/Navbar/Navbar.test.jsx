import { render } from "@testing-library/react";
import NavBar from "./index";

describe("NavBar tests", () => {
  it("NavBar renders without craching", () => {
    const navbar = render(<NavBar />);
    expect(navbar).toMatchSnapshot();
  });
});
