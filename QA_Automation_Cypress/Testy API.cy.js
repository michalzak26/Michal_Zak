describe('httpbin API tests', () => {

    // Test 1: GET request - check if status code is 200
    it('GET request should return 200 status', () => {
      cy.request('https://httpbin.org/get').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Test 2: POST request - send JSON body and check response
    it('POST request should return correct JSON body', () => {
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: { name: 'John Doe', age: 30 }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json).to.deep.equal({ name: 'John Doe', age: 30 });
      });
    });
  
    // Test 3: PUT request - check response content
    it('PUT request should return correct data', () => {
      cy.request({
        method: 'PUT',
        url: 'https://httpbin.org/put',
        body: { update: true }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.update).to.eq(true);
      });
    });
  
    // Test 4: DELETE request - verify response
    it('DELETE request should return 200 status', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://httpbin.org/delete'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('url', 'https://httpbin.org/delete');
      });
    });
  
    // Test 5: Custom headers - send custom User-Agent and verify it in response
    it('Custom User-Agent header should be sent correctly', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'User-Agent': 'CustomAgent/1.0'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['User-Agent']).to.eq('CustomAgent/1.0');
      });
    });
  
    // Test 6: Send and verify custom header
    it('Custom X-Test-Header should be sent and verified', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'X-Test-Header': 'TestHeaderValue'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['X-Test-Header']).to.eq('TestHeaderValue');
      });
    });
  
    // Test 7: Query parameters - send random params and verify in response
    it('GET request should return query parameters', () => {
      const params = { search: 'Cypress', page: "2" };
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: params
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args).to.deep.equal(params);
      });
    });
  
    // Test 8: Verify response time is below a threshold (500ms)
    it('Request should complete in less than 500ms', () => {
      cy.request('https://httpbin.org/get').then((response) => {
        expect(response.duration).to.be.lessThan(500);
      });
    });
  
    // Test 9: Redirect - verify redirection works
    it('GET request should handle redirect', () => {
      cy.request({
        url: 'https://httpbin.org/redirect/1',
        followRedirect: false // disable automatic follow to capture redirect
      }).then((response) => {
        expect(response.status).to.eq(302); // Redirection status code
      });
    });
  
    // Test 10: Check response content type
    it('GET request should return JSON content type', () => {
      cy.request('https://httpbin.org/get').then((response) => {
        expect(response.headers['content-type']).to.include('application/json');
      });
    });
  
  });
  