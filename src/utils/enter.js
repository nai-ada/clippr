$("#searchInput").keypress(function (event) {
  if (event.which == 13) {
    // 13 is the enter key code
    // Trigger your search function or submit your search form
    $("#searchForm").submit();
  }
});
