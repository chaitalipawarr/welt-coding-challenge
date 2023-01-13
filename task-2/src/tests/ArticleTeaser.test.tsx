import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ArticleTeaser from "../components/ArticleTeaser/ArticleTeaser";

describe("<ArticleTeasers />", () => {
  test("should render component & display the loader", async () => {
    render(<ArticleTeaser />);
    const loaderComp = screen.getByTestId("loader");
    expect(loaderComp).toBeInTheDocument();
  });

  test("should display article teasers", async () => {
    render(<ArticleTeaser />);
    await waitForElementToBeRemoved(() => screen.queryByTestId("loader"));
    const comp = screen.getByTestId("articleTeaser");
    expect(comp).toBeInTheDocument();
  });
});
