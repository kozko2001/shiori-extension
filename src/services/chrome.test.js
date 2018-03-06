import { getCurrentUrl } from './chrome';

describe('Chrome extensions facade', () => {
  it('getCurrentUrl', () => {
    const url = 'http://allocsoc.net';
    const title = 'KZK';

    global.chrome = {
      tabs: {
        query(query, cb) {
          cb([{
            url,
            title,
          }]);
        },
      },
    };

    getCurrentUrl().then((res) => {
      expect(res).toEqual({
        url,
        title,
      });
    });
  });
});
