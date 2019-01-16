import mileageResponse from './fixtures/mileageResponse.json';

describe('image response', () => {
  it('parses a response from rekognition', () => {
    const results = mileageResponse.TextDetections.map(({ DetectedText: t }) => t);
    const max = Math.max(...results.filter(r => /\d/.test(+r)));
    expect(max).toEqual(66890);
  });
});
