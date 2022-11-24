const { User } = require("../models");
const jwt = require("jsonwebtoken");

const signup = async(req, res) => {
    const { name, password, grade, email, majorType } = req.body;

    try {
        const user = await User.findOne({
            where: { email }
        });

        if (user) {
            return res.status(409).json({
                message: "이미 존재하는 회원입니다."
            });
        } else {
            await User.create({
                name,
                password,
                grade,
                email,
                majorType
            });
    
            return res.status(201).json({
                message: "회원가입이 완료되었습니다."
            });
        }
        
    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

const login = async(req, res) => {
    const { email, password } = req.body;
    const secretKey = req.app.get("jwt-secret");

    try {
        const user = await User.findOne({
            where: { email }
        });

        if (user.password === password) {
            const accessToken = jwt.sign({
                id: user.id
            },
            secretKey,
            {
                expiresIn: "1h"
            });

            return res.status(200).json({
                message: "로그인이 완료되었습니다.",
                accessToken
            });
        } else {
            return res.status(400).json({
                message: "올바르지 않은 비밀번호입니다."
            });
        }

    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

module.exports = {
    signup,
    login
};