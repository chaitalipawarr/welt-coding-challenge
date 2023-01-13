import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ArticleTeasers from "../components/ArticleTeasers/ArticleTeasers";

describe("<ArticleTeasers />", () => {
  test("should render component & display the loader", async () => {
    render(<ArticleTeasers />);
    const loaderComp = screen.getByTestId("loader");
    expect(loaderComp).toBeInTheDocument();
  });

  test("should display article teasers", async () => {
    render(<ArticleTeasers />);
    await waitForElementToBeRemoved(() => screen.queryByTestId("loader"));
    const comp = await screen.findByTestId("articleTeasers");
    expect(comp).toBeInTheDocument();
  });

  /* test("renders error when API call fails", async () => {
    render(<ArticleTeasers />);
    act(() => {
      const response = {
        json: jest.fn().mockResolvedValueOnce({ ok: false }),
      };
      global.fetch = jest.fn().mockResolvedValueOnce(response);
    });

    await waitFor(() => {
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
  }); */

  afterEach(() => jest.restoreAllMocks());
});
