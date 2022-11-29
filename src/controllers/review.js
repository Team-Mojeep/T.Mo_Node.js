const { Review, Recruitment, User } = require("../models");

const createReview = async(req, res) => {
    const { user_id, star, content } = req.body;
    const RecruitId = req.params.recruitment_id;
    const UserId = req.decoded.id;

    try {

        const recruitment = await Recruitment.findOne({
            where: { id: RecruitId}
        });

        const authority = await Recruitment.findOne({
            where: { member: UserId}
        })

        const user = await User.findOne({
            where: { id: user_id }
        });

        const recruit = await Recruitment.findOne({
            where: { member: user_id }
        });

        if (!recruitment) {
            return res.status(404).json({
                message: "해당 모집글이 존재하지 않습니다."
            });
        } else if (!authority) {
            return res.status(403).json({
                message: "리뷰 작성 권한이 없습니다."
            });
        } else if (!user) {
            return res.status(404).json({
                message: "해당 유저가 존재하지 않습니다."
            });
        } else if (!recruit) {
            return res.status(403).json({
                message: "프로젝트를 같이 한 사람이 아닙니다."
            });
        }
        
        await Review.create({
            writer: UserId,
            user_id,
            star,
            content
        });

        return res.status(201).json({
            message: "리뷰가 작성되었습니다."
        });

    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

module.exports = {
    createReview
};