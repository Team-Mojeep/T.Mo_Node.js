const { Recruitment } = require("../models");

const createRecruitment = async(req, res) => {
    const { title, major_type, recruitment_type, number, technology, period, content } = req.body;
    const UserId = req.decoded.id;

    try {
        await Recruitment.create({
            user_id: UserId,
            title,
            major_type,
            recruitment_type,
            number,
            technology,
            period,
            content
        });
        return res.status(201).json({
            message: "모집글이 작성되었습니다."
        });
    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

const addMember = async(req, res) => {
    const { user_id } =req.body;
    const RecruitmentId = req.params.id;

    try {
        const recruitment = await Recruitment.findOne({
            where: { id: RecruitmentId }
        });

        await recruitment.update({
            member: user_id
        });
        
        return res.status(200).json({
            message: "프로젝트에 참여되었습니다."
        });

    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

module.exports = {
    createRecruitment,
    addMember
};