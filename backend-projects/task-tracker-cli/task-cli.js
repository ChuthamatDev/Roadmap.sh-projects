#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "tasks.json");

function loadTasks() {
  if (!fs.existsSync(tasksPath)) return [];
  try {
    const raw = fs.readFileSync(tasksPath, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error reading tasks.json:", err.message);
    return [];
  }
}

function saveTasks(tasksArray) {
  try {
    const data = JSON.stringify(tasksArray, null, 2);
    fs.writeFileSync(tasksPath, data);
  } catch (err) {
    console.error("Error saving tasks.json:", err.message);
  }
}

function getTask(id) {
  if (!id) {
    console.log("Please provide a Task ID.");
    return;
  }

  const tasks = loadTasks();
  const found = tasks.find((t) => String(t.id) === String(id));

  if (!found) {
    console.log(`Task ID: ${id} not found.`);
    return;
  }

  console.log(JSON.stringify(found, null, 2));
}

// อัปเกรดฟีเจอร์ List by Status แล้ว
function listTasks(statusFilter) {
  const tasks = loadTasks();

  if (statusFilter) {
    // ถ้ามีการระบุสถานะ ให้กรองเอาเฉพาะสถานะนั้นมาโชว์
    const filteredTasks = tasks.filter((t) => t.status === statusFilter);
    console.log(JSON.stringify(filteredTasks, null, 2));
  } else {
    // ถ้าไม่มีการระบุสถานะ ให้โชว์ทั้งหมด
    console.log(JSON.stringify(tasks, null, 2));
  }
}

function addTask(description) {
  if (!description) {
    console.log(
      'Please provide a task description, e.g., task-cli add "Buy groceries"',
    );
    return;
  }

  const tasks = loadTasks();

  const newId = (() => {
    const matches = tasks
      .map((t) =>
        typeof t.id === "string" ? t.id.match(/^(.*?)(\d+)$/) : null,
      )
      .filter(Boolean);

    const width = matches.reduce((w, m) => Math.max(w, m[2].length), 3);
    const maxNum = matches.reduce(
      (max, m) => Math.max(max, parseInt(m[2], 10)),
      0,
    );

    const nextNum = maxNum + 1;
    const prefix = "task-";
    return `${prefix}${String(nextNum).padStart(width, "0")}`;
  })();

  const newTask = {
    id: newId,
    description: description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log(`Task added successfully (ID: ${newId})`);
}

function updateTask(id, newDescription) {
  if (!id || !newDescription) {
    console.log(
      'Please provide an ID and a new description, e.g., task-cli update task-001 "New text"',
    );
    return;
  }

  const tasks = loadTasks();
  const targetId = String(id);
  const idx = tasks.findIndex((t) => t && String(t.id) === targetId);

  if (idx === -1) {
    console.log(`Task ID: ${targetId} not found.`);
    return;
  }

  const updated = {
    ...tasks[idx],
    description: newDescription,
    updatedAt: new Date().toISOString(),
  };

  tasks[idx] = updated;
  saveTasks(tasks);

  console.log(`Task updated successfully (ID: ${targetId})`);
}

function deleteTask(id) {
  if (!id) {
    console.log("Please provide a Task ID to delete.");
    return;
  }

  const tasks = loadTasks();
  const targetId = String(id);

  // ตรวจสอบก่อนว่ามีงานนี้ให้ลบไหม
  const isExist = tasks.some((t) => String(t.id) === targetId);
  if (!isExist) {
    console.log(`Task ID: ${targetId} not found.`);
    return;
  }

  const filterId = tasks.filter((item) => String(item.id) !== targetId);
  saveTasks(filterId);

  console.log(`Task deleted successfully (ID: ${targetId})`);
}

// แก้ไขการอัปเดตสถานะให้ถูกต้อง
function updateStatus(id, newStatus) {
  if (!id) {
    console.log("Please provide a Task ID to update status.");
    return;
  }

  const tasks = loadTasks();
  const targetId = String(id);
  const idx = tasks.findIndex((t) => t && String(t.id) === targetId);

  // เพิ่มการเช็คว่าหา ID เจอไหม
  if (idx === -1) {
    console.log(`Task ID: ${targetId} not found.`);
    return;
  }

  // อัปเดตเฉพาะ Status และเวลา แทนการใช้ Spread operator ผิดวิธี
  tasks[idx].status = newStatus;
  tasks[idx].updatedAt = new Date().toISOString();

  saveTasks(tasks);

  console.log(`Task status marked as '${newStatus}' (ID: ${targetId})`);
}

function main() {
  const [, , cmd, arg1, arg2] = process.argv;

  switch (cmd) {
    case "get":
      getTask(arg1);
      break;
    case "list":
      listTasks(arg1);
      break;
    case "add":
      addTask(arg1);
      break;
    case "update":
      updateTask(arg1, arg2);
      break;
    case "delete":
      deleteTask(arg1);
      break;
    case "mark-in-progress":
      updateStatus(arg1, "in-progress");
      break;
    case "mark-done":
      updateStatus(arg1, "done");
      break;
    default:
      console.log(
        "Usage: get <id> | list [status] | add <desc> | update <id> <desc> | delete <id> | mark-in-progress <id> | mark-done <id>",
      );
  }
}

main();
