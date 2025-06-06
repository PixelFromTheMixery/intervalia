extends VBoxContainer

class_name editor

signal new_timer(timer_data)

func _buffer():
	pass

var focused: bool = false
var pom: Node = global.selected
var data: Dictionary = {}

@onready var window: Window = $"../../"

@onready var title: TextEdit = $Grid_Number/TextEdit_Title
@onready var work: SpinBox = $Grid_Number/SpinBox_Work
@onready var rest: SpinBox = $Grid_Number/SpinBox_Rest
@onready var pomo: SpinBox = $Grid_Number/SpinBox_Pomo
@onready var long: SpinBox = $Grid_Number/SpinBox_Long
@onready var autorest: CheckButton = $Grid_Check/Check_AutoRest
@onready var dynamic: CheckButton = $Grid_Check/Check_Dynamic
@onready var mute: CheckButton = $Grid_Check/Check_Mute
@onready var autowork: CheckButton = $Grid_Check/Check_AutoWork

@onready var display_title: Button = $VBox_Pomo/HBox_Title/Button_Title
@onready var display_autoRest: Button = $VBox_Pomo/HBox_Settings/Button_Rest
@onready var display_dynamic: Button = $VBox_Pomo/HBox_Settings/Button_Dynamic
@onready var display_mute: Button = $VBox_Pomo/HBox_Settings/Button_Mute
@onready var display_autoWork: Button = $VBox_Pomo/HBox_Settings/Button_Work
@onready var display_work: Label = $VBox_Pomo/HBox_Details/Label_Work
@onready var display_rest: Label = $VBox_Pomo/HBox_Details/Label_Rest
@onready var display_pomo: Label = $VBox_Pomo/HBox_Details/Label_Pomo
@onready var display_long: Label = $VBox_Pomo/HBox_Details/Label_Long


func _ready():
	if focused:
		window.title = "Editing %s" % pom.title
		title.text = pom.title
		work.value = pom.base_work
		rest.value = pom.base_rest
		pomo.value = pom.base_pomo
		long.value = pom.base_long
		autorest.button_pressed = pom.auto_rest
		dynamic.button_pressed = pom.dynamic
		mute.button_pressed = pom.mute
		autowork.button_pressed = pom.auto_work
		display_title.text = pom.title
		display_autoRest.disabled = not pom.auto_rest
		display_dynamic.disabled = not pom.dynamic
		display_mute.disabled = not pom.mute
		display_autoWork.disabled = not pom.auto_work
		global.update_text(display_work, 0, pom.base_work)
		global.update_text(display_rest, 0, pom.base_rest)
		global.update_text(display_pomo, 1, 0, pom.base_pomo)
		global.update_text(display_long, 0, pom.base_long)
	else:
		data = global.default_pomo()
		window.title = "Adding New Timer"
		title.text = data["title"]
		work.value = data["base_work"]
		rest.value = data["base_rest"]
		pomo.value = data["base_pomo"]
		long.value = data["base_long"]
		autorest.button_pressed = data["auto_rest"]
		dynamic.button_pressed = data["dynamic"]
		mute.button_pressed = data["mute"]
		autowork.button_pressed = data["auto_work"]
		display_title.text = data["title"]
		display_autoRest.disabled = not data["auto_rest"]
		display_dynamic.disabled = not data["dynamic"]
		display_mute.disabled = not data["mute"]
		display_autoWork.disabled = not data["auto_work"]
		global.update_text(display_work, 0, data["base_work"])
		global.update_text(display_rest, 0, data["base_rest"])
		global.update_text(display_pomo, 1, 0, data["base_pomo"])
		global.update_text(display_long, 0, data["base_long"])

static func instantiate(selected: bool): 
	var instance = load('res://scenes/windows/edit_window.tscn').instantiate()
	var edit_script = instance.get_child(0).get_child(0)
	edit_script.focused = selected
	return instance

func close():
	window.queue_free()

func _on_window_close_requested():
	close()

func _on_button_cancel_pressed():
	close()

func _on_button_delete_pressed():
	# coming soon
	pass 

func _on_button_confirm_pressed():
	if focused:
		pom.title = title.text
		pom.base_work = work.value
		pom.base_rest = rest.value
		pom.base_pomo = pomo.value
		pom.base_long = long.value
		pom.work = [work.value, 0]
		pom.pomo = 0
		if dynamic.button_pressed: pom.rest = [0,0]
		else: pom.rest = [rest.value, 0]
		pom.dynamic = dynamic.button_pressed
		pom.auto_work = autowork.button_pressed
		pom.auto_rest = autorest.button_pressed
		pom.populate()
		pom._on_button_title_toggled(true)
		close()
	else:
		data["title"] = title.text
		data["base_work"] = work.value
		data["base_rest"] = rest.value
		data["base_pomo"] = pomo.value
		data["base_long"] = long.value
		data["work"] = [work.value, 0]
		data["pomo"] = 0
		if dynamic.button_pressed: data["rest"] = [0,0]
		else: data["rest"] = [rest.value, 0]
		data["auto_rest"] = autorest.button_pressed
		data["dynamic"] = dynamic.button_pressed
		data["mute"] = mute.button_pressed
		data["auto_work"] = autowork.button_pressed
		signals.new_timer.emit(data)
		close()
		

func _on_text_edit_title_text_changed():
	display_title.text = title.text

func _on_spin_box_work_value_changed(value:int):
	global.update_text(display_work, 0, value)

func _on_spin_box_rest_value_changed(value:int):
	global.update_text(display_rest, 0, value)

func _on_spin_box_pomo_value_changed(value:int):
	pom.base_pomo = value
	global.update_text(display_pomo, 1, 0, value)

func _on_spin_box_long_value_changed(value:int):
	pom.base_long = value
	global.update_text(display_long, 0, value)

func _on_check_dynamic_toggled(toggled_on:bool):
	pom.dynamic = toggled_on
	display_dynamic.disabled = not toggled_on

func _on_check_auto_work_toggled(toggled_on:bool):
	pom.auto_work = toggled_on
	display_autoWork.disabled = not toggled_on

func _on_check_auto_rest_toggled(toggled_on:bool):
	pom.auto_rest = toggled_on
	display_autoRest.disabled = not toggled_on

func _on_check_mute_toggled(toggled_on:bool):
	pom.mute = toggled_on
	display_mute.disabled = not toggled_on
