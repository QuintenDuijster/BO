using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyController : MonoBehaviour
{
    [SerializeField] private GameObject Bullet;
    [SerializeField] private float minShootCooldown = 5;
    [SerializeField] private float maxShootCooldown = 8;
    private float shootCooldown = 0;
    void Start()
    {
        
    }

    void Update()
    {
        if (shootCooldown == 0)
        {
            Vector3 location = new Vector3 (transform.position.x, transform.position.y, transform.position.z);
            GameObject newBullet = Instantiate(Bullet, location, Quaternion.identity);

            shootCooldown = Random.Range(minShootCooldown, maxShootCooldown);
        }

        if (shootCooldown > 0)
        {
            shootCooldown -= Time.deltaTime;
        }
    }
}
