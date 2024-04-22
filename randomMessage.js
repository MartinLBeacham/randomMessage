module.exports = function randomMessage() {
  let sentence = "";

  const articleList = [
    { text: "A", type: "singular" },
    { text: "The", type: "singular" },
    { text: "The", type: "plural" },
    { text: "Three", type: "plural" },
    { text: "Twenty-Six", type: "plural" },
    { text: "Uncountable", type: "plural" },
  ];

  const articleIndex = Math.floor(Math.random() * articleList.length);

  const article = articleList[articleIndex];

  const subjectList = [
    { text: "balloon", type: "singular" },
    { text: "ham sandwich", type: "singular" },
    { text: "rollercoasters", type: "plural" },
    { text: "candyfloss vendors", type: "plural" },
    { text: "cantaloupes", type: "plural" },
    { text: "Moon Mission Smoothie", type: "singular" },
  ];

  subjectApplicable = subjectList.filter((item) => item.type == article.type);

  subjectIndex = Math.floor(Math.random() * subjectApplicable.length);

  const subject = subjectApplicable[subjectIndex];

  const verbList = [
    { text: "pops", type: "singular" },
    { text: "flies", type: "singular" },
    { text: "pop", type: "plural" },
    { text: "illumine", type: "plural" },
    { text: "creak", type: "plural" },
    { text: "glows", type: "singular" },
  ];

  verbApplicable = verbList.filter(
    (item) => item.type == article.type
  );

  thirdPos = Math.floor(Math.random() * verbApplicable.length);

  const verb = verbApplicable[thirdPos];

  return article.text + " " + subject.text + " " + verb.text+".";
};
