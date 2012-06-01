<?php defined('SYSPATH') or die('No direct script access.');

class File extends Kohana_File
{

	public static function check_directory($dir)
	{
		global $page;
		if (!is_dir($dir))
		{
			if (!@mkdir($dir, 0755, true))
			{
				throw new Exception('Unable to create new directory:<br />'.
					'<code>'.$dir.'</code></p>'
				);
			} else
			{
				return TRUE;
			}
		}
		if (!is_writable($dir))
		{
			throw new Exception("The directory $dir is not writable.");
		}
	}

}