const db = require('../data/db-config')

module.exports = {
    findUserPosts,
}

function findUserPosts(id) {
    return (
        db('posts as p') //remember to return the call to db()
        .join('users as u', 'u.id', '=', 'p.user_id')
        .where('u.id', id)
        .select('p.id', 'p.contents', 'u.username')
        .then(posts => {
        return posts;
        })
    )
}

//separate error handling service, data access, framework stuff, business logic
//models
//components
//routers

//by feature or by resource ie users and posts routers
//models views controllers folder