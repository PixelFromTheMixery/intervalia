extends VBoxContainer

@onready var title = $"../../HBox_Title/Label_Title"

var editor_scene = preload("res://scenes/windows/edit_window.tscn")

func _ready():
	signals.connect("open_editor", open_editor)
	signals.connect("select_set", update_selection)
	signals.connect("new_timer", add_timer)
	populate_timers()

func populate_timers():
	pass
	# pull out from glob al?

func open_editor():
	global.selected._on_button_stop_pressed()
	add_child(editor_scene.instantiate())

func _on_button_edit_pressed():
	var confirm_data = [
		self,
		editor_scene,
		null,
		"edit_pomo",
		"About Editing Timers",
		"Editting the pomodoro will reset it, are you sure you want to continue?",
		"Reset",
		"Empty dynamic break bank first"
	]
	var confirm_instance = confirm.instantiate(confirm_data)
	add_child(confirm_instance)

func _on_button_add_pressed():
	var confirm_data = [
		self,
		editor_scene,
		null,
		"add_pomo",
		"Add timer or category?",
		"Would you like to add a category to put timers into or add a timer to a category?",
		"Coming soon",
		"Add a timer (to an existing category)"
	]
	var confirm_instance = confirm.instantiate(confirm_data)
	add_child(confirm_instance)

func update_selection():
	title.text = "Selected: \n %s" %global.selected.title

func add_timer(new_pomo: Dictionary):
	var new_instance = pomodoro.instantiate(new_pomo)
	add_child(new_instance)
	new_instance._on_button_title_toggled(true)
	print("timer was made")
