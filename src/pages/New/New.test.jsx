import { render } from "@testing-library/react";
import New from "./index";
import { Provider } from "react-redux";
import store from "../../store";

describe("New tests", () => {
  it("New renders without craching", () => {
    const page = render(
      <Provider store={store}>
        <New />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
});
