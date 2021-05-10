import { render } from "@testing-library/react";
import Best from "./index";
import { Provider } from "react-redux";
import store from "../../store";

describe("Best tests", () => {
  it("Best renders without craching", () => {
    const page = render(
      <Provider store={store}>
        <Best />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
});
