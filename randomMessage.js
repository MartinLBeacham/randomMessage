const {verbList, articleList, subjectList} = require('./modules/language.js')

module.exports = function randomMessage() {
  let sentence = "";

  const articleIndex = Math.floor(Math.random() * articleList.length);

  const article = articleList[articleIndex];

  subjectApplicable = subjectList.filter((item) => item.type == article.type);

  subjectIndex = Math.floor(Math.random() * subjectApplicable.length);

  const subject = subjectApplicable[subjectIndex];

  verbApplicable = verbList.filter(
    (item) => item.type == article.type
  );

  thirdPos = Math.floor(Math.random() * verbApplicable.length);

  const verb = verbApplicable[thirdPos];

  return article.text + " " + subject.text + " " + verb.text+".";
};
