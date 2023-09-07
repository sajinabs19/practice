let nodremailer1=require('nodemailer')
console.log("im running",nodremailer1)

let transport=nodremailer1.createTransport({
    service:'gmail',
    auth:{
        user:'sajinabs86@gmail.com',
        pass:'rqrmvvtffutqzjgy'
    }
    
},{
    tls:{
        rejectUnauthorized: false
    }
})

let mailoption={
    from:'sajinabs86@gmail.com',
    to:'chapineelakanth@gmail.com',
    subject:'testing mail',
    text:'hello how r u'

}

transport.sendMail(mailoption,(err,res)=>{
if(err)throw err;
console.log("mail sent")
})