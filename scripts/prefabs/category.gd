extends VBoxContainer

class_name category

@onready var title: Label = $Label_Title

static func instantiate(type: String, _timers: Array):
	var instance = load("res://scenes/prefabs/timer_category.tscn")
	instance.title.text = type
	return instance
