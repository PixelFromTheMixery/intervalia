extends VBoxContainer

@onready var focus_timer = $VBox_Pomo
@onready var waiting = $Label_Waiting

var minute: bool = true #change to setting
var working: bool = true

func _ready():
	signals.connect("select_set", update_selected)

func update_selected():
	if global.selected == null:
		focus_timer.timer.stop()
		focus_timer.hide()
		waiting.show()
	
	else:
		focus_timer.show()
		waiting.hide()
