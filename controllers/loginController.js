const Login = require('../models/login');

module.exports = {

    index: async (req, res) => {
        return res.render('login');
    },

    login: async (req, res) => {
        let {
            username,
            password
        } = req.body;

        let loginData = await Login.findOne({
            user: username,
            password:password
        });

        if(username === "" && password === ""){
            return res.redirect('/');
        }
        

        if (loginData) {
            let doctype = jsUcfirst(loginData.doctype)
                return res.render('result',{
                    loginData: loginData,
                    total: (loginData.salary+loginData.OT+loginData.Bonus) -((loginData.salary+loginData.OT+loginData.Bonus)*0.05),
                    type: doctype
                    
                });
        }

        res.flash('<span uk-icon="icon: warning"></span> ไม่พบข้อมูลผู้ใช้งาน!!', 'danger');
        res.redirect('/');
    },





}

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}