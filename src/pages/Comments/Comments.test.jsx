import { render } from "@testing-library/react";
import Comments from "./index";
import { Provider } from "react-redux";
import store from "../../store";

describe("Comments tests", () => {
  it("Comments renders without craching", () => {
    const page = render(
      <Provider store={store}>
        <Comments />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
});
