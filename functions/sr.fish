function sr -a 'custom_message'
	set success $status

	if test -n "$custom_message"
		set cmd_name $custom_message
	else
		set cmd_name "Operation"
	end

	if test $success -eq 0
		set result "succeeded"
	else
		set result "failed"
	end

	say -v Samantha $cmd_name $result

	return $success
end
