$("#addBtn").on("click", function () {
  console.log("clicking")
  const inputValue = $(".input").val();
  if (inputValue.trim() === "") return;
  
  const todoList = $("<div>").attr({ class: "todoContainer", id: Date.now() }).append(
    $("<div>").attr({class:"todoSection1"}).append(
    $("<input>").attr({
      type: "checkbox",
      class: "checkbox",
      checked: false,
    })),
    $("<div>").attr({class:"todoSection2"}).append(
    $("<input>").attr({
      type: "text",
      class: "todo",
      value: inputValue,
      disabled: true
    }),
    $("<button>").attr({class:"updateButton"}).text("수정"),
    $("<button>").text("삭제").addClass("deleteButton")
    ) 
  );

  $(".todoContent").append(todoList);
  $(".input").val("");

  $(document).on("click", ".updateButton", function () {
    const $todoItem = $(this).closest(".todoContainer");
    const $todoInput = $todoItem.find(".todo");
  
    if ($(this).text() === "수정") {
      $(this).text("저장");
      $todoInput.prop("disabled", false).focus();
    } else if ($(this).text() === "저장") {
      $(this).text("수정");
      $todoInput.prop("disabled", true);
    }
  });

  $(document).on("click", ".deleteButton", function() {
    const todoItemId = $(this).closest(".todoContainer").attr("id");
    $("#" + todoItemId).remove();
  });

  $(document).on("click", ".checkbox", function (e) {
    const $todoItem = $(this).closest(".todoContainer");
    if ($(this).prop("checked")) {
      $(".doneContent").append($todoItem);
      $todoItem.find(".updateButton").css("display", "none")
    } else {
      $(".todoContent").append($todoItem);
      $todoItem.find(".updateButton").css("display", "block")
    }
  });

  $(".input").on("keydown", function (e) {
    if (e.key === "Enter") {
      $("#addBtn").click(); 
    }
  });
});
