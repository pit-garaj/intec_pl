<?php
namespace Bitrix\Location\Entity\Address\Normalizer;

use Bitrix\Main\Text\Encoding;

/**
 * Class CommonNormalizer
 * @package Bitrix\Location\Entity\Address\Normalizer
 * Delete all except letters and spaces, trim and converts to uppercase.
 * @internal
 */
class CommonNormalizer implements INormalizer
{
	/**
	 * @inheritdoc
	 */
	public function normalize(string $string): string
	{
		$result = $string;

		// todo: \w on non-utf-8 sites
		if(mb_strtolower(SITE_CHARSET) != 'utf-8')
		{
			$result = Encoding::convertEncoding($result, SITE_CHARSET, 'utf-8');
		}

		$result = preg_replace('/([^\w\s]|_)/iu', ' ', $result);

		if(mb_strtolower(SITE_CHARSET) != 'utf-8')
		{
			$result = Encoding::convertEncoding($result, 'utf-8', SITE_CHARSET);
		}

		$result = preg_replace('/\s+/i'.BX_UTF_PCRE_MODIFIER, ' ', $result);
		$result = trim($result);
		return ToUpper($result);
	}
}