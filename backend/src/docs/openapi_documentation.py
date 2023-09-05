query_example = {
    "query": {"name": None, "count": None, "price": None, "category": "tools"},
    "selection": [
        {
            "count": 20,
            "price": 9.99,
            "name": "Hammer",
            "category": "tools",
            "id": 1,
        },
        {
            "count": 100,
            "price": 1.99,
            "name": "Nails",
            "category": "consumables",
            "id": 2,
        },
    ],
}

item_example = {
    "count": 50,
    "price": 5.99,
    "name": "Pliers",
    "category": "tools",
    "id": 1,
}

license_info = {
    "name": "License: Apache 2.0",
    "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
}

tags_metadata = [
    {
        "name": "items",
        "description": "Manage the lifecycle of the item "
        "stock and their base price in Euro.",
    },
]
