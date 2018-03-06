import { login, insertBookmark } from './shiori';

describe('network calls tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('login', () => {
    it('log with correct password and username, should receive a token!', () => {
      fetch.mockResponse('some-token-here!');

      login('username', 'password', true).then((data) => {
        expect(data).toEqual({
          ok: true,
          token: 'some-token-here!',
        });
      });
    });

    it('log with incorrect username/password, ok should be false', () => {
      fetch.mockReject(new Error('fake error message'));

      login('username', 'password', true).then((data) => {
        expect(data.ok).toBeFalsy();
      });
    });
  });

  describe('insertBookmark', () => {
    it('send a new bookmarks and the request is a success!', () => {
      const data = {
        except: '',
        id: -1,
        tags: [],
        title: '',
        url: 'http://allocsoc.net',
      };

      const f = fetch.mockResponse(JSON.stringify(data));

      insertBookmark('MY-API-TOKEN', 'http://allocsoc.net').then((results) => {
        expect(f.mock.calls[0][1].headers._headers).toEqual({ // eslint-disable-line
          authorization: ['Bearer MY-API-TOKEN'],
        });
        expect(results.ok).toBeTruthy();
      });
    });


  });
});
