$("button").on("click", function () {
  const inputValue = $("input").val();
  const todoList = $("<div>").append(
    $("<input>").attr({
      type: "checkbox",
      class: "checkbox",
      checked: false,
    }),
    inputValue,
    $("<button>").text("삭제").addClass("delBtn")
  );

  $(".todoList").append(todoList);
  $("input").val("");

  $(".delBtn").on("click", function () {
    $(this).closest("div").remove();
  });

  $(".checkbox").on("click", function (e) {
    if ($(this).prop("checked")) {
      $(".completedList").append($(this).closest("div"));
    } else {
      $(".todoList").append($(this).closest("div"));
    }
  });
});
