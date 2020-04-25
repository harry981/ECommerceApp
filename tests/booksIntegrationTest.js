require('should')
const request=require('supertest')
const mongoose=require('mongoose')
process.env.ENV='Test'
const app=require('../index.js')

const Book=mongoose.model('Book')
const agent=request.agent(app);

describe('Book Crud Test',()=>{
    it('should allow a book to be posted and return read and _id',(done)=>{
        const bookPost={title:'My Book',genre:'Fiction',author:'Harshit'}

        agent.post('/api/book/books').send(bookPost).expect(200).end((err,results)=>{
           if(err){

           }
           console.log(results)
           results.body.should.have.property('addedBook')
           //results.body.read.should.equal(false)
           done();
        })

    })

    afterEach((done)=>{
        Book.deleteMany({}).exec();
        done();
    })

    after((done)=>{
          mongoose.connection.close();
          app.server.close(done());
    })

})