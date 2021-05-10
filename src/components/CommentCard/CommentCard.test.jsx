import { render } from "@testing-library/react";
import NewCard from "./index";

describe("Nav tests", () => {
  it("Nav renders without craching", () => {
    const footer = render(<NewCard />);
    expect(footer).toMatchSnapshot();
  });
});
