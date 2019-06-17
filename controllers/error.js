exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageHeading: "Page Not Found !!!!!!!!", pageTitle: "Page Not Found" , path: "error"})
}