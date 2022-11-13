import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
import fetchMock from "jest-fetch-mock";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

fetchMock.enableMocks();
Enzyme.configure({ adapter: new Adapter() });
