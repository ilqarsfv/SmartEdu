exports.pageIndex = (req, res) => {
  res.render("index", {
    page_name: "index",
  });
};

exports.pageAbout = (req, res) => {
  res.render("about", {
    page_name: "about",
  });
};
