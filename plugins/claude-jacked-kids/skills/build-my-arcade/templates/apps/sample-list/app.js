// ===========================================================================
//  My List — a complete little APP in plain JavaScript (no engine, no server).
//  A good "island" to copy from when building an app/tool for a kid: it shows
//  a type-in box, a list that grows, checking items off, deleting, and — the
//  important part — SAVING the data with window.AppStore so it's still there
//  after a reload. Runs offline straight from a file.
// ===========================================================================
(function () {
  var META = window.APP_META || { id: "sample-list" };

  // Title + emoji from this app's metadata.
  var nameEl = document.getElementById("appName");
  var emojiEl = document.getElementById("appEmoji");
  if (META.name) { nameEl.textContent = META.name; document.title = META.name; }
  if (META.emoji) emojiEl.textContent = META.emoji;

  var input = document.getElementById("newItem");
  var addBtn = document.getElementById("addBtn");
  var listEl = document.getElementById("items");
  var emptyNote = document.getElementById("emptyNote");
  var saveNote = document.getElementById("saveNote");

  // --- the data: an array of { text, done }. Loaded from the data box. ---
  var items = window.AppStore ? window.AppStore.load(META.id, []) : [];
  if (!Array.isArray(items)) items = [];   // be forgiving if storage held junk

  // Guard against an accidental double-tap deleting the row that shifts up into
  // the same spot — ignore a second delete for a moment after one fires.
  var deleting = false;

  // Save and tell the kid it worked (or gently warn if storage is blocked).
  function save() {
    var ok = window.AppStore ? window.AppStore.save(META.id, items) : false;
    if (ok) {
      saveNote.className = "save-note";
      saveNote.textContent = "💾 Saved! It'll be here next time.";
    } else {
      saveNote.className = "save-note warn";
      saveNote.textContent = "⚠️ Couldn't save here — ask a grown-up to open this with the play-server so it remembers.";
    }
  }

  function render() {
    listEl.textContent = "";
    emptyNote.style.display = items.length ? "none" : "block";

    items.forEach(function (item, i) {
      var li = document.createElement("li");
      li.className = "item" + (item.done ? " done" : "");

      var check = document.createElement("span");
      check.className = "check";
      check.textContent = item.done ? "✅" : "⬜";
      check.setAttribute("role", "button");
      check.setAttribute("aria-label", (item.done ? "Uncheck " : "Check off ") + item.text);
      check.addEventListener("click", function () {
        items[i].done = !items[i].done;
        save(); render();
      });

      var label = document.createElement("span");
      label.className = "label";
      label.textContent = item.text;        // textContent — never inject HTML

      var del = document.createElement("button");
      del.className = "del";
      del.type = "button";
      del.textContent = "✕";
      del.setAttribute("aria-label", "Remove " + item.text);
      del.addEventListener("click", function () {
        if (deleting) return;               // ignore an accidental double-tap
        deleting = true;
        items.splice(i, 1);
        save(); render();
        setTimeout(function () { deleting = false; }, 350);
      });

      li.appendChild(check);
      li.appendChild(label);
      li.appendChild(del);
      listEl.appendChild(li);
    });
  }

  function addItem() {
    var text = (input.value || "").trim();
    if (!text) return;
    items.push({ text: text, done: false });
    input.value = "";
    input.focus();
    save(); render();
  }

  addBtn.addEventListener("click", addItem);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addItem(); }
  });

  // go!
  render();
})();
