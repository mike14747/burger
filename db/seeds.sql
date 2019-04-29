INSERT INTO burgers (patty_id, bun_id, topping_id) VALUES
    (1, 1, 1),
    (2, 2, 3),
    (3, 3, 5);

INSERT INTO patties (patty) VALUES
    ('Portobello'),
    ('Spicy Black Bean'),
    ('Aduki Bean BBQ'),
    ('Lentil/Quinoa');

INSERT INTO buns (bun) VALUES
    ('Multigrain'),
    ('Ciabatta'),
    ('Kaiser');

INSERT INTO toppings (topping) VALUES
    ('Lettuce, Tomato and Onion'),
    ('Lettuce, Tomato and Avocado'),
    ('Tomato and Avocado'),
    ('Mushroom and Onion'),
    ('No Toppings');

-- SELECT bg.id, p.patty, bn.bun, t.topping FROM burgers AS bg INNER JOIN buns AS bn ON bg.bun_id=bn.bun_id INNER JOIN patties AS p ON bg.patty_id=p.patty_id INNER JOIN toppings AS t ON bg.topping_id=t.topping_id