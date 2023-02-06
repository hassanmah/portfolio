<?php

namespace benf\neo\models;

use Craft;
use craft\base\Model;
use craft\models\Structure;

/**
 * Class BlockStructure
 *
 * @package benf\neo\models
 * @author Spicy Web <plugins@spicyweb.com.au>
 * @author Benjamin Fleming
 * @since 2.0.0
 */
class BlockStructure extends Model
{
    /**
     * @var int|null The block structure ID.
     */
    public ?int $id = null;

    /**
     * @var int|null The structure ID.
     */
    public ?int $structureId = null;

    /**
     * @var int|null The field ID.
     */
    public ?int $fieldId = null;

    /**
     * @var int|null The owner ID.
     */
    public ?int $ownerId = null;

    /**
     * @var int|null The site ID.
     */
    public ?int $siteId = null;

    /**
     * @var Structure|null The associated structure.
     */
    private ?Structure $_structure = null;

    /**
     * @inheritdoc
     */
    protected function defineRules(): array
    {
        return [
            [['id', 'structureId', 'fieldId', 'ownerId', 'siteId'], 'number', 'integerOnly' => true],
        ];
    }

    /**
     * Returns the associated structure.
     *
     * @return Structure|null
     */
    public function getStructure(): ?Structure
    {
        $structuresService = Craft::$app->getStructures();

        if (!$this->_structure && $this->structureId) {
            $this->_structure = $structuresService->getStructureById($this->structureId);
        }

        return $this->_structure;
    }
}
