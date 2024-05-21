import express from "express";
import { Op } from "sequelize";

import { getModels } from "../models/config";

const router = express.Router();

export const Categories = {
  Catgory1: 1,
  Catgory2: 2,
  Catgory3: 3,
  Catgory4: 4,
  Catgory5: 5,
  Catgory6: 6,
  Catgory7: 7,
  Catgory8: 8,
  Catgory9: 9,
  Catgory10: 10,
  Catgory11: 11,
  Catgory12: 12,
  Catgory13: 13,
  Catgory14: 14,
  Catgory15: 15,
  Catgory16: 16,
};

router.post("/comment", async (req, res) => {
  const { Article, ArticleComment, User } = getModels();

  try {
    const { articleId, userId, text, firstName, lastName } = req.body;

    const comment = await ArticleComment.create({ text, firstName, lastName });

    const article = await Article.findByPk(articleId);

    await comment.setArticle(article);

    if (userId) {
      const user = await User.findByPk(userId);

      await comment.setUser(user);

      comment.verified = true;

      await comment.save();
    }

    res.status(200).json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:category", async (req, res) => {
  const { Article, ArticleCategory, ArticleComment, ArticleImage } =
    getModels();

  try {
    const { category } = req.params;

    const articleCategories = await ArticleCategory.findAll({
      where: { CategoryId: category },
    });

    //console.log(articleCategories);

    const articleIdsList = articleCategories.map(({ ArticleId }) => ({
      id: ArticleId,
    }));

    console.log(articleIdsList);

    const articles = await Article.findAll({
      where: { [Op.or]: articleIdsList },
    });

    const response = await Promise.all(
      articles.map(async (article) => {
        const comments = await ArticleComment.findAll({
          where: { ArticleId: article.id },
        });

        const images = await ArticleImage.findAll({
          where: { ArticleId: article.id },
        });

        const categoryIds = articleCategories.map(
          ({ CategoryId }) => CategoryId
        );

        const commentsFormated = comments?.map((comment) => ({
          id: comment.id,
          text: comment.text,
          firstName: comment.firstName,
          lastName: comment.lastName,
          timestamp: comment.updatedAt,
          verified: comment.verified,
        }));

        const imagesURLS = images?.map(({ url }) => url) || [];

        return {
          ...article.toJSON(),
          categories: categoryIds,
          comments: commentsFormated,
          images: imagesURLS,
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const { Article, ArticleCategory, ArticleComment, ArticleImage } =
    getModels();

  try {
    const articles = await Article.findAll();

    const response = await Promise.all(
      articles.map(async (article) => {
        const categories = await ArticleCategory.findAll({
          where: { ArticleId: article.id },
        });

        const comments = await ArticleComment.findAll({
          where: { ArticleId: article.id },
        });

        const images = await ArticleImage.findAll({
          where: { ArticleId: article.id },
        });

        const categoryIds = categories.map(({ CategoryId }) => CategoryId);

        const commentsFormated = comments?.map((comment) => ({
          id: comment.id,
          text: comment.text,
          firstName: comment.firstName,
          lastName: comment.lastName,
          timestamp: comment.updatedAt,
          verified: comment.verified,
        }));

        const imagesURLS = images?.map(({ url }) => url) || [];

        return {
          ...article.toJSON(),
          categories: categoryIds,
          comments: commentsFormated,
          images: imagesURLS,
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    console.log("Error getting Articles", error);
    res.status(500).json(error);
  }
});

export default router;
