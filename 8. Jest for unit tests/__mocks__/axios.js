export default {
    get: jest.fn(() => Promise.resolve({ data: { title: "Mocked API Response" } })),
  };
  