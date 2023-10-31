document.addEventListener("DOMContentLoaded", function () {
    var tasks = getLocalStorageTasks(); // Local Storage'dan görevleri al
    var todoList = document.getElementById("todo-list");
  
    tasks.forEach(function (task) {
      addTaskToTodoList(task, todoList);
    });
  });
  
  // Local Storage'dan görevleri al
  function getLocalStorageTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  }
  
  // Sayfada yeni bir görev eklemek için kullanılan fonksiyon
  function addTaskToTodoList(task, list) {
    var listItem = document.createElement("li");
    listItem.textContent = task;
  
    // Sil butonu
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Sil"));
    deleteButton.addEventListener("click", function () {
      listItem.remove();
      removeTaskFromLocalStorage(task);
    });
  
    // Yapıldı butonu
    var doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Yapıldı"));
    doneButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });
  
    var buttonContainer = document.createElement("div");
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(doneButton);
  
    listItem.appendChild(buttonContainer);
    list.appendChild(listItem);
  }
  
  // Local Storage'dan belirli bir görevi kaldır
  function removeTaskFromLocalStorage(task) {
    var tasks = getLocalStorageTasks();
    var index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
  
  // Yeni görev ekleme işlevi
  function newElement() {
    var newTask = document.getElementById("new-task").value;
    if (newTask === "") {
      showToast("Lütfen bir görev girin");
      return;
    }
  
    var todoList = document.getElementById("todo-list");
    addTaskToTodoList(newTask, todoList);
    addToLocalStorage(newTask); // Yeni görevi local storage'a ekle
  
    document.getElementById("new-task").value = ""; // Inputu temizle
    showToast("Görev eklendi!");
  }
  
  // Local Storage'a yeni görev eklemek için kullanılan fonksiyon
  function addToLocalStorage(task) {
    var tasks = getLocalStorageTasks(); // Mevcut görevleri al
    tasks.push(task); // Yeni görevi ekleyin
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Local Storage'da saklayın
  }
  
  // Toast mesajı gösterme işlevi
  function showToast(message) {
    var toastContainer = document.getElementById("toast-container");
    var toastMessage = document.getElementById("toast-message");
  
    toastMessage.textContent = message;
    toastContainer.style.display = "block";
    setTimeout(function () {
      toastContainer.style.display = "none";
    }, 3000); // Mesaj 3 saniye sonra otomatik olarak kaybolur
  }
  