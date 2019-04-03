import { getDateStartEnd } from "./datetime.helpers";

describe("date time helpers", () => {
  it("should return the correct start and end of date +8:00", () => {
    const result = getDateStartEnd("2019-02-11");
    expect(result.start).toBe("2019-02-10T16:00:00.000Z");
    expect(result.end).toBe("2019-02-11T16:00:00.000Z");
  });

  it("should return the correct start and end of date in +9:00", () => {
    const result = getDateStartEnd("2019-02-11", 9);
    expect(result.start).toBe("2019-02-10T15:00:00.000Z");
    expect(result.end).toBe("2019-02-11T15:00:00.000Z");
  });
});
