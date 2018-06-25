export default function() {
  this.get('/posts', function() {
    return {
      "posts": [
        {
          "id": "fee81100-f7bd-11e6-848c-adc362169f09",
          "title": "Some Other Post",
          "content": "Some Other Post Content",
          "attachment": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/",
          "key": "fred.nyambati",
          "created_at": "2018-02-20T22:43:27.000Z",
          "updated_at": "2018-02-20T22:43:27.000Z",
          "deleted_at": null
        }, {
          "id": "48cddf30-f7bd-11e6-88c5-571a62d76275",
          "title": "My New Post",
          "content": "Here’s a post",
          "attachment": null,
          "key": "{{yourkey}}",
          "created_at": "2018-02-20T22:38:22.000Z",
          "updated_at": "2018-02-20T22:38:22.000Z",
          "deleted_at": null
        }
      ]
    }
  });

  this.get('/posts/:id');

  this.post('/posts', function(db, request) {
    var attrs = JSON.parse(request.requestBody).post;
    console.log(request.requestBody);
    console.log(attrs);
    // var record = db.posts.insert(attrs);
  });
  // this.patch('/posts/:id', ({posts}, request) => {
  //   var id = request.params.id;
  //   var attrs = JSON.parse(request.requestBody).post;
  //    var record = posts.updateRecord(id, attrs);
  //   console.log(id);
  //   console.log(attrs);
  //    console.log(record);
  //
  //   return {post: attrs};
  // });
  this.patch('/posts/:id');

  this.del('/posts/:id', ({
    posts
  }, request) => {
    let id = request.params.id;
    console.log('DELETING' + id);
  });

}
// These comments are here to help you get started. Feel free to delete them.

/*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

// this.namespace = '';     make this `/api`, for example, if your API is namespaced
// this.timing = 400;       delay for each request, automatically set to 0 during testing

/*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
